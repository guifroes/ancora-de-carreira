class AnswersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    render json: Answer.all
  end

  def create
    @answer = Answer.new(answer_params)
    puts params
    @answer.save
    Rails.logger.info(@answer.errors.inspect) 
    render :json => {'Message' => 'Successfully created #{answer.name}'}.to_json, :status => 200
  end

  private
  def answer_params
    params.require(:answer).permit(:name, :email, :institution, :course, :final_result)
  end

end
