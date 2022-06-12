#회사 요약 정보

import yfinance as yf
from googletrans import Translator

translator = Translator()
inc = input()
inc_yf = yf.Ticker(inc)
inc_name = inc_yf.info['longName'] #기업 풀네임
inc_sector = inc_yf.info['sector'] #섹터
inc_summary = inc_yf.info['longBusinessSummary'] #기업 요약 정보
trans1 = translator.translate(inc_summary, src='en', dest='ko')
print(inc_name)
print(inc_sector)
print(trans1.text)