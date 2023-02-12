FROM mongo:4
WORKDIR /usr/src/configs 
COPY SettingReplicaset.js .
COPY SettingReplicaset.sh .
RUN ["chmod", "+x", "./SettingReplicaset.sh"]
CMD ["./SettingReplicaset.sh"]
