#종목 재무 정보

import yahoo_fin.stock_info as si
from datetime import datetime
from dateutil.relativedelta import relativedelta

code = input() #ex) '005930.KS' - Samsung / 'AMZN' - Amazon
now = datetime.now()
monthago = now - relativedelta(months=1)

#자산, 부채, 자본
balance = si.get_balance_sheet(code)
print(balance.loc[['totalLiab', 'totalStockholderEquity', 'totalAssets'], :])
print()

#시가 총액, PER (valuation measures)
valuations = si.get_stats_valuation(code)
print(valuations.loc[[0, 2], :])
print()

#매출액, 영업이익
income = si.get_income_statement(code)
print(income.loc[['totalRevenue', 'operatingIncome'], :])