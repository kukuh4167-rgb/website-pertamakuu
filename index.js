const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.get('/api/info', (req, res) => {
    res.json({
        status: 'online',
            pesan: 'Halo dari API!',
                waktu: new Date().toLocaleString('id-ID')
                  });
                  });

                  app.listen(PORT, () => {
                    console.log(`✅ Server jalan di http://localhost:${PORT}`);
                    });

                    module.exports = app;