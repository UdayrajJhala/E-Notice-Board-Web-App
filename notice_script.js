document.addEventListener('DOMContentLoaded', function() {
    const addNoticeForm = document.getElementById('add-notice-form');
    const mainContent = document.querySelector('.main-content');

    addNoticeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('notice-title').value;
        const description = document.getElementById('notice-description').value;
        const fileInput = document.getElementById('notice-file');
        const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : ''; 

        if (title && description) {
            const noticeBox = createNoticeBox(title, description, fileName);
            mainContent.appendChild(noticeBox);

            addNoticeForm.reset();
        } else {
            alert('Please fill in both title and description fields.');
        }
    });

    mainContent.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-notice-btn')) {
            const noticeBox = event.target.closest('.notice-box');
            if (confirm('Are you sure you want to delete this notice?')) {
                noticeBox.remove();
            }
        }
    });

    function createNoticeBox(title, description, fileName, fileURL) {
        const noticeBox = document.createElement('div');
        noticeBox.classList.add('notice-box');
    
        noticeBox.innerHTML = `
            <div class="notice-header">
                <h2>${title}</h2>
                <button class="delete-notice-btn">Delete</button>
            </div>
            <div class="notice-content">
                <p>${description}</p>
                <p>Attached Document: <a href="documents/${fileName}" target="_blank">${fileName}</a></p>
            </div>
        `;
    
        return noticeBox;
    }
    
});
