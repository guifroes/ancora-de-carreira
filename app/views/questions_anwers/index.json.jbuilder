json.array!(@questions_anwers) do |questions_anwer|
  json.extract! questions_anwer, 
  json.url questions_anwer_url(questions_anwer, format: :json)
end