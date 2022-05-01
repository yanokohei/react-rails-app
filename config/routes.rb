Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'orders/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'foods/index'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'restaurants/index'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :restaurants do
        resources :foods, only: %i[index]
      end
      resources :line_foods, only: %i[index create]
      put 'line_foods/replace', to: 'line_foods#replace'
      resources :orders, only: %i[create]
    end
  end
end
