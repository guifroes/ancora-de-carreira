class AddServicoColumn < ActiveRecord::Migration
  def change
    add_column :answers, :servico, :decimal
  end
end
