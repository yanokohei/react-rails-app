require 'net/http'
require 'uri'
require "json"

data = Net::HTTP.get(URI.parse('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json'))

result = JSON.parse(data)

# Ruby API Json 取得 コンソール
puts "発表者:" + result["publishingOffice"]
# 報告日時:
# 対象地域:
# ヘッドライン:
# 詳細:


# File.open(data) do |file|
#   json = JSON.load(file)
#   puts json # -> (上記のJSONファイルの内容が1行で表示される)
# end

# 検索ワード Ruby API Json 取得 コンソール
# require 'net/http'
# require 'JSON'

# res = Net::HTTP.get(URI.parse('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json'))
# parsed_json = JSON.parse(res)
# puts "発表者: #{parsed_json['publishingOffice']}"
# puts "報告日時: #{parsed_json['reportDatetime']}"
# puts "対象地域: #{parsed_json['targetArea']}"
# puts "ヘッドライン: #{parsed_json['headlineText']}"
# puts "詳細: #{parsed_json['text']}"
