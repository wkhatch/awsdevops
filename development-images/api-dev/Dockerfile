FROM node:6.10.2

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 0.21.3

ENV PATH="/root/.yarn/bin:${PATH}"

RUN yarn global add strongloop && yarn global add nodemon

WORKDIR /usr/src/api

