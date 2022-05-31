from pandas_datareader import data as pdr
import yfinance as yf
import matplotlib.pyplot as plt

yf.pdr_override()

code = input() #ex) '005930.KS' - Samsung / 'AMZN' - Amazon
chart = pdr.get_data_yahoo(code, start = '2022-05-01')
print(chart)
#print(chart['Close']) - 종가만 출력


plt.plot(chart.index, chart.Close, 'b') #날짜 정보, 종가 정보, 파란색
plt.show()