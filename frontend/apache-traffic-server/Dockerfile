FROM ubuntu:22.04

RUN apt-get update && DEBIAN_FRONTEND=noninteractiv apt-get install -y \
    autoconf \
    automake \
    build-essential \
    curl \
    git \
    libtool \
    libssl-dev \
    libpcre3-dev \
    zlib1g-dev \
    tcl-dev

WORKDIR tmp
RUN git clone https://git-wip-us.apache.org/repos/asf/trafficserver.git

WORKDIR trafficserver
RUN autoreconf -if \
    && ./configure --prefix=/opt/ts \
    && make \
    && make install

ENV PATH="${PATH}:/opt/ts/bin"

WORKDIR /
RUN apt-get purge --auto-remove -y \
    autoconf \
    automake \
    build-essential \
    curl \
    git \
    libtool \
    libssl-dev \
    libpcre3-dev \
    zlib1g-dev \
    tcl-dev \
    && apt-get clean \
    && rm -rf /tmp/*

COPY records.config /opt/ts/etc/trafficserver/records.config
COPY remap.config /opt/ts/etc/trafficserver/remap.config
COPY ssl_multicert.config /opt/ts/etc/trafficserver/ssl_multicert.config

CMD ["traffic_server"]