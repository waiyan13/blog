ARG VERSION

FROM python:${VERSION}

RUN apk add --no-cache bash

RUN mkdir -p /home/blog
RUN addgroup --gid 1000 pelican
RUN chown :1000 /home/blog
RUN chmod 775 /home/blog
RUN chmod g+s /home/blog
RUN adduser --disabled-password --gecos "" -u 1000 --ingroup pelican pelican

USER pelican

RUN pip install pelican[Markdown]

ENV PATH="/home/pelican/.local/bin:${PATH}"

WORKDIR /home/blog

CMD ["tail", "-f", "/dev/null"]

EXPOSE 8000

