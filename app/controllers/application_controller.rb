class ApplicationController < ActionController::API
  before_action :fake_load # ローカルでもUIが意図したように出来ているか確認するためにあえて実装

  def fake_load
    sleep(1)
  end
end
