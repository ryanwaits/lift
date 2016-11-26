class Api::V1::LiftsController < Api::V1::BaseController
  def index
    respond_with Lift.all
  end

  def create
    lift = Lift.create(lift_params)
    if lift.save
      respond_with :api, :v1, lift
    end
  end

  private

  def lift_params
    params.require(:lift).permit(:date, :name, :weight_lifted, :sets, :reps)
  end
end