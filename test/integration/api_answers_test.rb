require 'test_helper'

class ApiAnswersTest < ActionDispatch::IntegrationTest
  test "get api/answers.json" do
    get "/api/answers.json"
    assert_response :success
    assert body == Answer.all.to_json
    answers = JSON.parse(response.body)
    assert answers.size == 2
    assert answers.any? {|s| s["name"] == answers(:one).name }
  end
end
