#재무제표

import pandas as pd
import yfinance as yf

code = input()
ticker = yf.Ticker(code)


kor_name = ['연구개발비' ,'회계변경효과', '법인세 차감전 당기순이익', '소액주주지분',
            '당기순이익', '판매비와 관리비', '매출총이익', '이자와 법인세 차감전 이익',
            '영업이익', '기타영업비용', '이자비용', '빈도가 낮고 특이한 사건 등으로 발생한 수익/손실',
            '영업외손익', '기타항목', '법인세비용', '매출액', '영업비용',
            '매출원가', '총 기타 순 수익/비용', '비계속적영업', '계속영업순이익', '보통주적용순이익']
 
yearly_fin = ticker.financials
yearly_fin.columns = yearly_fin.columns.astype(str)
yearly_fin['한글명'] = kor_name
yearly_fin.set_index('한글명', inplace=True)
print(yearly_fin)



# mapping = {
#     'Research Development':'연구개발비', 
#     'Effect Of Accounting Charges':'회계변경효과',
#     'Income Before Tax':'법인세 차감전 당기순이익', 
#     'Minority Interest':'소액주주지분', 
#     'Net Income': '당기순이익',
#     'Selling General Administrative':'판매비와 관리비', 
#     'Gross Profit':'매출총이익', 
#     'Ebit':'이자와 법인세 차감전 이익',
#     'Operating Income':'영업이익', 
#     'Other Operating Expenses':'기타영업비용', 
#     'Interest Expense':'이자비용',
#     'Extraordinary Items':'빈도가 낮고 특이한 사건 등으로 발생한 수익/손실', 
#     'Non Recurring':'영업외손익', 
#     'Other Items':'기타항목',
#     'Income Tax Expense':'법인세비용', 
#     'Total Revenue':'매출액', 
#     'Total Operating Expenses':'영업비용',
#     'Cost Of Revenue':'매출원가', 
#     'Total Other Income Expense Net':'총 기타 순 수익/비용',
#     'Discontinued Operations':'비계속적영업', 
#     'Net Income From Continuing Ops':'계속영업순이익',
#     'Net Income Applicable To Common Shares':'보통주적용순이익'
# } 

# df_financials = pd.concat([pd.DataFrame.from_dict(mapping, orient='index', columns=['한글명']), 
#                            yearly_fin_info], axis=1)
# df_financials.set_index('한글명').astype(float).fillna(0).style.format('${0:,.0f}')
# print(df_financials)