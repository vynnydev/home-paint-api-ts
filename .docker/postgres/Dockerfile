FROM debezium/postgres:13

RUN usermod -u 1000 postgres
COPY docker-postgresql/docker-postgresql-databases.sh /docker-entrypoint-initdb.d/
