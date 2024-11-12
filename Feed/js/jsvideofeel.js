// Video Progress Logic
const video = document.getElementById('video-element');
const progressSegmentVideo = document.getElementById('progress-segment-video');
const volumeButton = document.getElementById('volume-button');
const volumeIcon = document.getElementById('volume-icon');


// Function to update the progress segment width based on video playback
function updateVideoProgress() {
    const duration = video.duration;
    const currentTime = video.currentTime;

    // Calculate the progress percentage
    const progressPercent = (currentTime / duration) * 100;

    // Set the width of the progress segment
    progressSegmentVideo.style.width = progressPercent + '%';
}

// Event listener to update progress as the video plays
video.addEventListener('timeupdate', updateVideoProgress);

// Optional: Reset the progress bar when the video ends
video.addEventListener('ended', () => {
    progressSegmentVideo.style.width = '0%';
});
// Function to toggle mute/unmute
function toggleMute() {
    if (video.muted) {
        // Unmute the video
        video.muted = false;
        volumeIcon.src = "../Feed/img/feels/Icon2.png"; // Change to the normal volume icon
    } else {
        // Mute the video
        video.muted = true;
        volumeIcon.src = "../Feed/img/feels/Icon-muted.png"; // Change to the muted volume icon
    }
}

// Add event listener to the volume button
volumeButton.addEventListener('click', toggleMute);

// Image Progress Logic
window.onload = function() {
    // Set the duration of the progress animation for images (in milliseconds)
    const imgDuration = 10000; // 10 seconds

    // Array of progress segment elements for images
    const progressSegmentsImages = [
        document.getElementById('progress-segment-image-1'),
        document.getElementById('progress-segment-image-2'),
        document.getElementById('progress-segment-image-3'),
        document.getElementById('progress-segment-image-4')
    ];

    // Function to handle the progress animation for images
    function animateImageProgress(progressElement, callback) {
        const targetWidth = 100; // Representing 100% width
        const intervalTime = 20; // Update every 20ms
        const steps = imgDuration / intervalTime; // Calculate how many steps in total
        let currentStep = 0;

        // Interval function to increment the width of the progress segment
        const interval = setInterval(function() {
            const currentWidth = (currentStep / steps) * targetWidth;
            progressElement.style.width = currentWidth + '%';
            currentStep++;

            if (currentStep >= steps) {
                clearInterval(interval);
                callback(); // Call the callback when the animation is done
            }
        }, intervalTime);
    }

    // Function to transition to the next section after image progress is done
    function transitionToNextSection() {
        console.log('Transition to the next section (image/video)');
        // Logic for transitioning to the next content (e.g., change the image/video source or show the next item)
    }

    // Animate each progress bar for images and trigger transition when done
    animateImageProgress(progressSegmentsImages[0], function() {
        animateImageProgress(progressSegmentsImages[1], function() {
            animateImageProgress(progressSegmentsImages[2], function() {
                animateImageProgress(progressSegmentsImages[3], function() {
                    transitionToNextSection(); // Once all progress bars are done, move to the next section
                });
            });
        });
    });
};


document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('main-video');
    const controlButton = document.getElementById('controlButton');
    const playIcon = document.getElementById('playIcon');

    // Toggle video play/pause on clicking the control button
    controlButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playIcon.src = ''; // Change icon to pause
        } else {
            video.pause();
            playIcon.src = ''; // Change icon to play
        }
    });

    // Change icon based on video play/pause state
    video.addEventListener('play', function () {
        playIcon.src = '';
    });

    video.addEventListener('pause', function () {
        playIcon.src = '';
    });
});
