# Utilizar la imagen base de PHP con Apache
FROM php:8.0-apache

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar apache.conf a su ubicación
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Copiar los archivos de la aplicación al contenedor
COPY ./src /var/www/html/

# Instalar las dependencias del sistema
RUN apt-get update && \
    apt-get install -y \
    git \
    unzip 
    
# Instalar extensiones de PHP
RUN docker-php-ext-install pdo pdo_mysql

# Configurar el módulo de Apache
RUN a2enmod rewrite

# Iniciar el servidor Apache
CMD ["apache2-foreground"]

# Exponer el puerto 80
EXPOSE 80
