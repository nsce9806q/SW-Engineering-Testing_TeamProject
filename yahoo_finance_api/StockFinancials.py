#종목 재무 정보

import yahoo_fin.stock_info as si

code = input() #ex) '005930.KS' - Samsung / 'AMZN' - Amazon

#부채, 자기 자본, 자산
balance = si.get_balance_sheet(code)
balance_2 = balance.loc[['totalLiab', 'totalStockholderEquity', 'totalAssets'], :] # balance에서 3가지 항목만 추출
kor_name = ['부채', '자기자본', '자산']
balance_2['항목'] = kor_name
balance_2.set_index('항목', inplace=True)
print(balance_2)
print()

#시가 총액, PER (valuation measures)
valuations = si.get_stats_valuation(code)
valuations_2 = valuations.loc[[0, 2], :] # valuations에서 2가지 항목만 추출
kor_name = ['시가총액', 'PER']
valuations_2['항목'] = kor_name
valuations_2.set_index('항목', inplace=True)
print(valuations_2)
print()

#매출액, 영업이익
income = si.get_income_statement(code)
income_2 = income.loc[['totalRevenue', 'operatingIncome'], :] # income에서 2가지 항목만 추출
kor_name = ['매출액', '영업이익']
income_2['항목'] = kor_name
income_2.set_index('항목', inplace=True)
print(income_2)