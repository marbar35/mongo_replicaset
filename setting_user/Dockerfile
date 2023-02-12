FROM mongo:4
WORKDIR /usr/src/configs 
COPY SettingUser.js .
COPY SettingUser.sh .
RUN ["chmod", "+x", "./SettingUser.sh"]
CMD ["./SettingUser.sh"]
