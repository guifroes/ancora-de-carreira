class AnswersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @answers = Answer.all

    #respond_to do |format|
     # format.csv { send_data @answers.as_csv }
    #end
    #send_data @answers.as_csv

    hash_to_excel_csv @answers.as_csv, "ancoras"
  end
  
  def hash_to_excel_csv(data, filename)
    send_data data.encode(Encoding::ISO_8859_1, :undef => :replace),
      :type => 'text/csv; charset=iso-8859-1; header=present',
      :disposition => "attachment; filename=#{filename}.csv"

  end

  def create
    @answer = Answer.new(answer_params)
    puts params
    @answer.save
    render :json => {'Message' => 'Successfully created #{answer.name}'}.to_json, :status => 200
  end

  private
  def answer_params
    params.require(:answer).permit!
  end

end
