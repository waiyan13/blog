ARG VERSION

FROM python:${VERSION}

RUN apk add --no-cache bash &&\
	mkdir -p /home/blog &&\
	addgroup --gid 1000 pelican &&\
	chown :1000 /home/blog &&\
	chmod 775 /home/blog &&\
	chmod g+s /home/blog &&\
	adduser --disabled-password --gecos "" -u 1000 --ingroup pelican pelican

USER pelican

WORKDIR /home/blog

RUN	pip install pelican[Markdown]

ENV PATH="/home/pelican/.local/bin:${PATH}"

CMD ["tail", "-f", "/dev/null"]

EXPOSE 8000

