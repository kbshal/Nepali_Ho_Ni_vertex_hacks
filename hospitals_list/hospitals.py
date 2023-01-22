import requests
from bs4 import BeautifulSoup as BS
from flask import Flask


cookies={"bd8bf4a40e5bf6dd65a84ca24ac85249":"ub72m55pca9t6buoas0liq54s6"}



app=Flask(__name__)

headers={
"Host":"directorykathmandu.com",
"User-Agent":"Mozilla/5.0 (X11; Linux x86_64; rv:103.0) Gecko/20100101 Firefox/103.0",
"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
"Accept-Language":"en-US,en;q=0.5",
"Accept-Encoding":"gzip, deflate, br",
"Connection":"keep-alive",
"Cookie":"bd8bf4a40e5bf6dd65a84ca24ac85249=ub72m55pca9t6buoas0liq54s6",
}


hospital_data=[]
@app.route("/hospitals")
def scraper():
    for i in range(4):
        url=f"https://directorykathmandu.com/top-listings/hospitals/page{i+1}"
        #hospitals_format={"name":None,"address":None}
        res=requests.get(url,headers=headers, cookies=cookies).text
        souped=BS(res, 'lxml')
        items=souped.find_all('div',attrs={'class':'listing-summary span12'})
        #print(items)

        for data in items:
            hospitals_format={"name":None,"address":None}
            #print(data.find('div',attrs={"class":"header"}).text)
            #print(data.find('p',attrs={"class":"address"}).text)
            hospitals_format["name"]=data.find('div',attrs={"class":"header"}).text
            hospitals_format["address"]=data.find('p',attrs={"class":"address"}).text
            hospital_data.append(hospitals_format)
       
    return hospital_data
