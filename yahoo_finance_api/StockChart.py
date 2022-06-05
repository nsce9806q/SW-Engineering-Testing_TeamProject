#주가 정보 출력, 차트 이미지 저장

from pandas_datareader import data as pdr
import yfinance as yf
import matplotlib.pyplot as plt
from datetime import datetime
from dateutil.relativedelta import relativedelta

yf.pdr_override()

code = input() #ex) '^IXIC' - Nasdaq / 'AMZN' - Amazon
now = datetime.now()
monthago = now - relativedelta(months=1)
chart = pdr.get_data_yahoo(code, start = monthago)
print(chart)
#print(chart['Close']) - 종가만 출력
# High: 고점 / Low: 저점
# Open: 시작가 / Close: 종가
# Volume: 거래량 / Adj Close: 수정 종가

plt.plot(chart.index, chart.Close, 'b') #x: 날짜 정보, y: 종가 정보, 파란색
plt.xticks(rotation=60)
plt.savefig('./chart.png')

#plt.show() #출력
