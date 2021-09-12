class AddServicoColumn < ActiveRecord::Migration[4.2]
  def change
    add_column :answers, :servico, :decimal
  end
end
