require 'test_helper'

class QuestionsAnwersControllerTest < ActionController::TestCase
  setup do
    @questions_anwer = questions_anwers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:questions_anwers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create questions_anwer" do
    assert_difference('QuestionsAnwer.count') do
      post :create, questions_anwer: {  }
    end

    assert_redirected_to questions_anwer_path(assigns(:questions_anwer))
  end

  test "should show questions_anwer" do
    get :show, id: @questions_anwer
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @questions_anwer
    assert_response :success
  end

  test "should update questions_anwer" do
    patch :update, id: @questions_anwer, questions_anwer: {  }
    assert_redirected_to questions_anwer_path(assigns(:questions_anwer))
  end

  test "should destroy questions_anwer" do
    assert_difference('QuestionsAnwer.count', -1) do
      delete :destroy, id: @questions_anwer
    end

    assert_redirected_to questions_anwers_path
  end
end
