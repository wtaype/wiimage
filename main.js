import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';
import { getFirestore,
  setDoc, getDoc, deleteDoc, onSnapshot,
  doc, collection, getDocs, serverTimestamp,
  query, where, orderBy, limit } from "firebase/firestore";
import { wiTema, Mensaje, Notificacion, savels, getls, removels} from './widev.js';

// ==============================
// VARIABLES GLOBALES
// ==============================
let currentNoteId = null;
let notes = [];
let images = [];
let currentImageIndex = 0;
let isEditing = false;

// ==============================
// INICIALIZACIÓN
// ==============================
$(document).ready(function() {
    console.log('🎉 WiImage iniciado correctamente');
    
    // Inicializar componentes
    // initThemes();
    initNotes();
    initImageGallery();
    initModals();
    initToasts();
    initKeyboardShortcuts();
    
    // Cargar datos guardados
    loadLocalData();
    
    // Aplicar tema guardado

    
    Notificacion('¡Bienvenido a WiImage!', 'Tu pizarra personalizada está lista', 'success');
});

// ==============================
// SISTEMA DE TEMAS
// ==============================
// function initThemes() {
//     const themes = ['Cielo', 'Dulce', 'Paz', 'Mora', 'Futuro'];
//     const $themeContainer = $('.witemas');
    
//     // Crear selectores de tema
//     themes.forEach(theme => {
//         const $themeBtn = $(`
//             <div class="tema" data-theme="${theme}" title="${theme}"></div>
//         `);
//         $themeContainer.append($themeBtn);
//     });
    
//     // Marcar tema activo
//     const currentTheme = getls('wiimage_theme') || 'Cielo';
//     $(`.tema[data-theme="${currentTheme}"]`).addClass('mtha');
    
//     // Event listener para cambio de tema
//     $(document).on('click', '.tema', function() {
//         const theme = $(this).data('theme');
//         $('.tema').removeClass('mtha');
//         $(this).addClass('mtha');
//         wiTema(theme);
//         savels('wiimage_theme', theme);
//         Notificacion('Tema cambiado', `Tema "${theme}" aplicado correctamente`, 'success');
//     });
// }

// ==============================
// SISTEMA DE NOTAS
// ==============================
function initNotes() {
    // Event listeners para notas
    $('#addNoteBtn').on('click', createNewNote);
    $('#saveNoteBtn').on('click', saveCurrentNote);
    $('#noteEditor').on('input', handleNoteEdit);
    $('#clearAllBtn').on('click', showClearAllConfirm);
    
    // Botones de formato
    $('#boldBtn').on('click', () => formatText('bold'));
    $('#italicBtn').on('click', () => formatText('italic'));
    $('#underlineBtn').on('click', () => formatText('underline'));
    
    // Auto-save cada 30 segundos
    setInterval(autoSaveNote, 30000);
}

function createNewNote() {
    const noteId = 'note_' + Date.now();
    const newNote = {
        id: noteId,
        title: 'Nueva Nota',
        content: '',
        created: new Date().toISOString(),
        modified: new Date().toISOString()
    };
    
    notes.unshift(newNote);
    renderNotesList();
    selectNote(noteId);
    savels('wiimage_notes', notes);
    
    Notificacion('Nueva nota', 'Nota creada correctamente', 'success');
    
    // Focus en el editor
    setTimeout(() => {
        $('#noteEditor').focus();
    }, 100);
}

function selectNote(noteId) {
    currentNoteId = noteId;
    const note = notes.find(n => n.id === noteId);
    
    if (note) {
        $('#noteEditor').val(note.content);
        $('.note-item').removeClass('active');
        $(`.note-item[data-note-id="${noteId}"]`).addClass('active');
        isEditing = false;
    }
}

function saveCurrentNote() {
    if (!currentNoteId) {
        createNewNote();
        return;
    }
    
    const note = notes.find(n => n.id === currentNoteId);
    if (note) {
        const content = $('#noteEditor').val().trim();
        note.content = content;
        note.modified = new Date().toISOString();
        
        // Actualizar título basado en contenido
        if (content) {
            const firstLine = content.split('\n')[0];
            note.title = firstLine.substring(0, 30) || 'Sin título';
        }
        
        renderNotesList();
        savels('wiimage_notes', notes);
        isEditing = false;
        
        Notificacion('Nota guardada', 'Los cambios se guardaron correctamente', 'success');
    }
}

function handleNoteEdit() {
    isEditing = true;
    // Actualizar indicador visual de edición
    $('#saveNoteBtn').addClass('active');
}

function autoSaveNote() {
    if (isEditing && currentNoteId) {
        saveCurrentNote();
        console.log('📝 Auto-guardado realizado');
    }
}

function deleteNote(noteId) {
    notes = notes.filter(n => n.id !== noteId);
    renderNotesList();
    savels('wiimage_notes', notes);
    
    if (currentNoteId === noteId) {
        currentNoteId = null;
        $('#noteEditor').val('');
    }
    
    Notificacion('Nota eliminada', 'La nota se eliminó correctamente', 'success');
}

function renderNotesList() {
    const $notesList = $('#notesList');
    
    if (notes.length === 0) {
        $notesList.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <p>No hay notas aún</p>
                <small>Crea tu primera nota para empezar</small>
            </div>
        `);
        return;
    }
    
    const notesHTML = notes.map(note => {
        const date = new Date(note.modified).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const preview = note.content.substring(0, 80) || 'Sin contenido...';
        
        return `
            <div class="note-item ${note.id === currentNoteId ? 'active' : ''}" 
                 data-note-id="${note.id}">
                <div class="note-item-actions">
                    <button class="delete-note-btn" data-note-id="${note.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <h4>${note.title}</h4>
                <p>${preview}</p>
                <span class="note-item-date">${date}</span>
            </div>
        `;
    }).join('');
    
    $notesList.html(notesHTML);
}

function formatText(command) {
    const editor = document.getElementById('noteEditor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    if (selectedText) {
        let formattedText = selectedText;
        switch(command) {
            case 'bold':
                formattedText = `**${selectedText}**`;
                break;
            case 'italic':
                formattedText = `*${selectedText}*`;
                break;
            case 'underline':
                formattedText = `__${selectedText}__`;
                break;
        }
        
        editor.value = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
        editor.setSelectionRange(start + formattedText.length, start + formattedText.length);
        handleNoteEdit();
    }
    
    // Activar botón visualmente
    $(`#${command}Btn`).addClass('active');
    setTimeout(() => {
        $(`#${command}Btn`).removeClass('active');
    }, 200);
}

// Event listeners para lista de notas
$(document).on('click', '.note-item', function() {
    if (!$(this).hasClass('active')) {
        const noteId = $(this).data('note-id');
        selectNote(noteId);
    }
});

$(document).on('click', '.delete-note-btn', function(e) {
    e.stopPropagation();
    const noteId = $(this).data('note-id');
    showDeleteNoteConfirm(noteId);
});

// ==============================
// SISTEMA DE GALERÍA DE IMÁGENES
// ==============================
function initImageGallery() {
    // Event listeners para galería
    $('#pasteArea').on('click', triggerImageUpload);
    $('.gallery-slot.empty').on('click', triggerImageUpload);
    
    // Pegar imágenes con Ctrl+V
    $(document).on('paste', handleImagePaste);
    
    // Drag & Drop
    $('#pasteArea, .gallery-grid').on({
        dragover: handleDragOver,
        dragleave: handleDragLeave,
        drop: handleImageDrop
    });
}

function triggerImageUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    
    input.onchange = function(e) {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                addImageToGallery(file);
            }
        });
    };
    
    input.click();
}

function handleImagePaste(e) {
    const items = Array.from(e.originalEvent.clipboardData.items);
    
    items.forEach(item => {
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            addImageToGallery(file);
            Notificacion('Imagen pegada', 'Imagen agregada desde el portapapeles', 'success');
        }
    });
}

function handleDragOver(e) {
    e.preventDefault();
    $(this).addClass('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    $(this).removeClass('drag-over');
}

function handleImageDrop(e) {
    e.preventDefault();
    $(this).removeClass('drag-over');
    
    const files = Array.from(e.originalEvent.dataTransfer.files);
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            addImageToGallery(file);
        }
    });
    
    if (files.length > 0) {
        Notificacion('Imágenes agregadas', `${files.length} imagen(es) agregada(s)`, 'success');
    }
}

function addImageToGallery(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = {
            id: 'img_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            src: e.target.result,
            name: file.name,
            size: file.size,
            type: file.type,
            timestamp: new Date().toISOString()
        };
        
        images.push(imageData);
        renderImageGallery();
        savels('wiimage_images', images);
    };
    
    reader.readAsDataURL(file);
}

function renderImageGallery() {
    const $galleryGrid = $('#galleryGrid');
    $galleryGrid.empty();
    
    // Crear 12 slots
    for (let i = 0; i < 12; i++) {
        const image = images[i];
        
        if (image) {
            const $slot = $(`
                <div class="gallery-slot filled" data-image-id="${image.id}" data-index="${i}">
                    <img src="${image.src}" alt="${image.name}" loading="lazy">
                    <button class="delete-btn" data-image-id="${image.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `);
            $galleryGrid.append($slot);
        } else {
            const $slot = $(`
                <div class="gallery-slot empty" data-slot="${i + 1}">
                    <i class="fas fa-plus"></i>
                </div>
            `);
            $galleryGrid.append($slot);
        }
    }
}

function deleteImage(imageId) {
    images = images.filter(img => img.id !== imageId);
    renderImageGallery();
    savels('wiimage_images', images);
    Notificacion('Imagen eliminada', 'La imagen se eliminó correctamente', 'success');
}

// Event listeners para galería
$(document).on('click', '.gallery-slot.filled img', function(e) {
    e.stopPropagation();
    const index = parseInt($(this).closest('.gallery-slot').data('index'));
    openImageModal(index);
});

$(document).on('click', '.gallery-slot.empty', triggerImageUpload);

$(document).on('click', '.delete-btn', function(e) {
    e.stopPropagation();
    const imageId = $(this).data('image-id');
    showDeleteImageConfirm(imageId);
});

// ==============================
// SISTEMA DE MODALES
// ==============================
function initModals() {
    // Modal de imagen
    $('#closeModalBtn, .modal-overlay').on('click', closeImageModal);
    $('.modal-content').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Navegación de imágenes
    $('#prevImageBtn').on('click', showPrevImage);
    $('#nextImageBtn').on('click', showNextImage);
    $('#downloadImageBtn').on('click', downloadCurrentImage);
    $('#deleteImageBtn').on('click', deleteCurrentImage);
    
    // Modal de confirmación
    $('#confirmYesBtn').on('click', handleConfirmYes);
    $('#confirmNoBtn').on('click', closeConfirmModal);
}

function openImageModal(index) {
    if (images.length === 0) return;
    
    currentImageIndex = index;
    const image = images[index];
    
    $('#modalImage').attr('src', image.src).attr('alt', image.name);
    $('#modalTitle').text(image.name);
    $('#imageCounter').text(`${index + 1} de ${images.length}`);
    $('#imageTimestamp').text(new Date(image.timestamp).toLocaleString('es-ES'));
    
    $('#imageModal').addClass('show');
    $('body').addClass('modal-open');
}

function closeImageModal() {
    $('#imageModal').removeClass('show');
    $('body').removeClass('modal-open');
}

function showPrevImage() {
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openImageModal(currentImageIndex);
    }
}

function showNextImage() {
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openImageModal(currentImageIndex);
    }
}

function downloadCurrentImage() {
    const image = images[currentImageIndex];
    if (image) {
        const link = document.createElement('a');
        link.download = image.name;
        link.href = image.src;
        link.click();
        
        Notificacion('Descarga iniciada', `Descargando ${image.name}`, 'success');
    }
}

function deleteCurrentImage() {
    const image = images[currentImageIndex];
    if (image) {
        showDeleteImageConfirm(image.id);
    }
}

// ==============================
// SISTEMA DE CONFIRMACIÓN
// ==============================
let confirmCallback = null;

function showDeleteNoteConfirm(noteId) {
    const note = notes.find(n => n.id === noteId);
    $('#confirmMessage').text(`¿Estás seguro de que quieres eliminar la nota "${note?.title || 'Sin título'}"?`);
    confirmCallback = () => deleteNote(noteId);
    $('#confirmModal').addClass('show');
}

function showDeleteImageConfirm(imageId) {
    const image = images.find(img => img.id === imageId);
    $('#confirmMessage').text(`¿Estás seguro de que quieres eliminar la imagen "${image?.name || 'imagen'}"?`);
    confirmCallback = () => {
        deleteImage(imageId);
        closeImageModal();
    };
    $('#confirmModal').addClass('show');
}

function showClearAllConfirm() {
    $('#confirmMessage').text('¿Estás seguro de que quieres borrar todas las notas e imágenes? Esta acción no se puede deshacer.');
    confirmCallback = clearAllData;
    $('#confirmModal').addClass('show');
}

function handleConfirmYes() {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    closeConfirmModal();
}

function closeConfirmModal() {
    $('#confirmModal').removeClass('show');
    confirmCallback = null;
}

function clearAllData() {
    notes = [];
    images = [];
    currentNoteId = null;
    
    $('#noteEditor').val('');
    renderNotesList();
    renderImageGallery();
    
    removels('wiimage_notes');
    removels('wiimage_images');
    
    Notificacion('Datos borrados', 'Todas las notas e imágenes fueron eliminadas', 'success');
}

// ==============================
// SISTEMA DE TOASTS
// ==============================
function initToasts() {
    // Crear contenedor si no existe
    if (!$('#toastContainer').length) {
        $('body').append('<div class="toast-container" id="toastContainer"></div>');
    }
}

function showToast(title, message, type = 'info', duration = 4000) {
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    const toastId = 'toast_' + Date.now();
    const $toast = $(`
        <div class="toast ${type}" id="${toastId}">
            <i class="toast-icon ${icons[type]}"></i>
            <div class="toast-content">
                <h4 class="toast-title">${title}</h4>
                <p class="toast-message">${message}</p>
            </div>
            <button class="toast-close" data-toast-id="${toastId}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `);
    
    $('#toastContainer').append($toast);
    
    // Mostrar toast
    setTimeout(() => {
        $toast.addClass('show');
    }, 100);
    
    // Auto-remove
    setTimeout(() => {
        removeToast(toastId);
    }, duration);
}

function removeToast(toastId) {
    const $toast = $(`#${toastId}`);
    $toast.removeClass('show');
    setTimeout(() => {
        $toast.remove();
    }, 300);
}

$(document).on('click', '.toast-close', function() {
    const toastId = $(this).data('toast-id');
    removeToast(toastId);
});

// ==============================
// ATAJOS DE TECLADO
// ==============================
function initKeyboardShortcuts() {
    $(document).on('keydown', function(e) {
        // Ctrl+S - Guardar nota
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveCurrentNote();
        }
        
        // Ctrl+N - Nueva nota
        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            createNewNote();
        }
        
        // Ctrl+V en el área de pegado
        if (e.ctrlKey && e.key === 'v' && !$(e.target).is('textarea, input')) {
            e.preventDefault();
            // El paste se maneja en handleImagePaste
        }
        
        // Escape - Cerrar modales
        if (e.key === 'Escape') {
            closeImageModal();
            closeConfirmModal();
        }
        
        // Flechas para navegación de imágenes en modal
        if ($('#imageModal').hasClass('show')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                showPrevImage();
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                showNextImage();
            }
        }
    });
}

// ==============================
// PERSISTENCIA LOCAL
// ==============================
function loadLocalData() {
    // Cargar notas
    const savedNotes = getls('wiimage_notes');
    if (savedNotes && Array.isArray(savedNotes)) {
        notes = savedNotes;
        renderNotesList();
        
        // Seleccionar la primera nota si existe
        if (notes.length > 0) {
            selectNote(notes[0].id);
        }
    }
    
    // Cargar imágenes
    const savedImages = getls('wiimage_images');
    if (savedImages && Array.isArray(savedImages)) {
        images = savedImages;
        renderImageGallery();
    }
    
    console.log(`📚 Cargadas ${notes.length} notas y ${images.length} imágenes`);
}

// ==============================
// LOGIN PLACEHOLDER
// ==============================
$('#loginBtn').on('click', function() {
    Notificacion('Próximamente', 'Sistema de login en desarrollo', 'info');
});

// ==============================
// UTILIDADES
// ==============================
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ==============================
// EXPORTAR FUNCIONES GLOBALES
// ==============================
window.WiImage = {
    showToast,
    createNewNote,
    saveCurrentNote,
    clearAllData,
    loadLocalData
};

console.log('✅ WiImage JavaScript cargado completamente');