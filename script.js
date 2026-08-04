cat > public/script.js << 'EOF'
function showAlert() {
    alert('Halo! 🎉 Website ini dibuat dari HP Android lho! Keren kan?');
    }

    function handleSubmit(event) {
        event.preventDefault();
            alert('Terima kasih! Pesan Anda telah diterima 📩');
                event.target.reset();
                }

                // Smooth scroll untuk navigation
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                            e.preventDefault();
                                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                                behavior: 'smooth'
                                                        });
                                                            });
                                                            });

                                                            console.log('🚀 Website berhasil dimuat!');
                                                            EOF