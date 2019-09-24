FROM ubuntu:18.04

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE yes
ENV DEBCONF_NOWARNINGS yes
ENV PROJECT /opt/app

# Setup image packages
RUN \
  # Create www-data user home directory
  mkdir -p       /var/www && \
  chown www-data /var/www && \
  chgrp www-data /var/www && \
  chmod 0775     /var/www && \
  # Install core packages
  apt-get update -q && apt-get install -yqq \
  binutils-doc \
  curl \
  debconf-utils \
  httpie \
  iputils-ping \
  locales \
  supervisor \
  vim \
  sudo && \
  # Clean up package installation
  apt-get clean && \
  rm -rf \
  /var/lib/apt/lists/* \
  /tmp/* \
  /var/tmp/* && \
  # Install Node 10.x
  curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
  apt-get install -y nodejs

COPY ./ $PROJECT

# Setup Project
RUN \
  # Set permissions on opt for npm to run as non-root
  chgrp www-data /opt/ && \
  chmod 0775     /opt/ && \
  # Move supervisord.conf into place 
  mv $PROJECT/supervisord.conf /etc/supervisor/conf.d/supervisord.conf && \
  # Set project directory permissions
  chmod -R u+s $PROJECT && \
  chmod -R g+s $PROJECT && \
  chown -R www-data $PROJECT && \
  chgrp -R www-data $PROJECT && \
  find $PROJECT -type d -exec chmod 0775 {} + && \
  find $PROJECT -type f -exec chmod 0774 {} +

EXPOSE 80 443 3000

ENTRYPOINT ["/usr/bin/supervisord"]

# CMD ["tail", "-f", "/dev/null"]
