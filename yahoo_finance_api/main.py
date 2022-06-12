from fastapi import FastAPI
import yahoo_fin.stock_info as si
from pandas_datareader import data as pdr
import yfinance as yf
from datetime import datetime
from dateutil.relativedelta import relativedelta
from googletrans import Translator

app = FastAPI()

@app.get("/company_info")
async def company_info(stock_id: str):
    balance = si.get_balance_sheet(stock_id)['2021-12-31']
    valuations = si.get_stats_valuation(stock_id)[1]
    income = si.get_income_statement(stock_id)['2021-12-31']

    yf.pdr_override()
    now = datetime.now()
    monthago = now - relativedelta(months=1)
    chart = pdr.get_data_yahoo(stock_id, start=monthago)

    chart_data = []
    for idx in range(chart.shape[0]):
        chart_data.append(
            {"date": chart.iloc[idx].name.to_pydatetime().strftime('%m/%d'), "price": int(chart.iloc[idx].Close)})

    translator = Translator()
    inc_yf = yf.Ticker(stock_id)

    data = {
        '기업명': inc_yf.info['longName'],
        '요약정보': translator.translate(inc_yf.info['longBusinessSummary'], dest='ko', src='en').text,
        '부채': float(balance['totalLiab']),
        '자기자본': float(balance['totalStockholderEquity']),
        '자산': float(balance['totalAssets']),
        '시가총액': str(valuations[0]),
        'PER': float(valuations[2]),
        '매출액': float(income['totalRevenue']),
        '영업이익': float(income['operatingIncome']),
        'chart': chart_data
    }

    return data
