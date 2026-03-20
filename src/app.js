require('dotenv').config();
require('./database');

const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.swaggerConfig(); 
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json({ limit: '50mb' }));
  }

  swaggerConfig() {
    const swaggerOptions = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'API Geração Tech 3.0',
          version: '1.0.0',
          description: 'Documentação do projeto de E-commerce Final',
        },
        servers: [
          {
            url: `http://localhost:${process.env.PORT || 3001}`,
            description: 'Servidor Local',
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
      },
      // Verifique se a pasta 'src' realmente existe na raiz. 
      // Se este arquivo estiver DENTRO de 'src', mude para: ['./routes/*.js']
      apis: ['./src/routes/*.js', './routes/*.js'], 
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);

    /* SUBSTITUIÇÃO AQUI:
       Adicionamos o objeto { explorer: true } para ajudar na renderização 
       e um log para confirmar a execução.
    */
    this.server.use(
      '/api-docs', 
      swaggerUi.serve, 
      swaggerUi.setup(swaggerDocs, { explorer: true })
    );
    
    console.log(`[Swagger] Configurado na rota /api-docs na porta ${process.env.PORT || 3001}`);
  }

  routes() {
    // --- ROTA DE TESTE (Adicione esta linha para diagnóstico) ---
    this.server.get('/teste-rota', (req, res) => res.json({ message: "O servidor está respondendo corretamente!" }));

    this.server.use('/v1/usuario', userRoutes);
    this.server.use('/v1/categoria', categoryRoutes);
    this.server.use('/v1/produto', productRoutes);
  }
}

module.exports = new App().server;
