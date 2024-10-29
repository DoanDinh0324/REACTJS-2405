function showContent(tab) {
    const camNhanContent = document.getElementById('camNhanContent');
    const videoContent = document.getElementById('videoContent');
    const camNhanTab = document.getElementById('camNhanTab');
    const videoTab = document.getElementById('videoTab');

    if (tab === 'camNhan') {
        camNhanContent.classList.remove('hidden');
        videoContent.classList.add('hidden');
        camNhanTab.classList.add('text-blue-600', 'font-semibold');
        videoTab.classList.remove('text-blue-600', 'font-semibold');
    } else if (tab === 'video') {
        videoContent.classList.remove('hidden');
        camNhanContent.classList.add('hidden');
        videoTab.classList.add('text-blue-600', 'font-semibold');
        camNhanTab.classList.remove('text-blue-600', 'font-semibold');
    }
}