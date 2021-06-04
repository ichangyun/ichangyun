#!/bin/sh

scp ./m/*.html ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/m/
scp ./m/*.htm ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/m/
scp ./m/css/*.css ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/m/css/
scp ./*.html ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/
scp ./*.htm ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/
scp ./css/*.css ichangyun@118.31.58.253:/usr/local/tomcat/apache-tomcat-cywebsite/webapps/ROOT/templets/1/cy/css/

echo "======================================================"
echo "=  已成功将*.htm文件和cy_style.css传输至服务器...  ="
echo "======================================================"