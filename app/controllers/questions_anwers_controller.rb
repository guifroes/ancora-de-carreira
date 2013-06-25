class QuestionsAnwersController < ApplicationController
  before_action :set_questions_anwer, only: [:show, :edit, :update, :destroy]

  # GET /questions_anwers
  # GET /questions_anwers.json
  def index
    @questions_anwers = QuestionsAnwer.all
  end

  # GET /questions_anwers/1
  # GET /questions_anwers/1.json
  def show
  end

  # GET /questions_anwers/new
  def new
    @questions_anwer = QuestionsAnwer.new
  end

  # GET /questions_anwers/1/edit
  def edit
  end

  # POST /questions_anwers
  # POST /questions_anwers.json
  def create
    @questions_anwer = QuestionsAnwer.new(questions_anwer_params)

    respond_to do |format|
      if @questions_anwer.save
        format.html { redirect_to @questions_anwer, notice: 'Questions anwer was successfully created.' }
        format.json { render action: 'show', status: :created, location: @questions_anwer }
      else
        format.html { render action: 'new' }
        format.json { render json: @questions_anwer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /questions_anwers/1
  # PATCH/PUT /questions_anwers/1.json
  def update
    respond_to do |format|
      if @questions_anwer.update(questions_anwer_params)
        format.html { redirect_to @questions_anwer, notice: 'Questions anwer was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @questions_anwer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions_anwers/1
  # DELETE /questions_anwers/1.json
  def destroy
    @questions_anwer.destroy
    respond_to do |format|
      format.html { redirect_to questions_anwers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_questions_anwer
      @questions_anwer = QuestionsAnwer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def questions_anwer_params
      params[:questions_anwer]
    end
end
