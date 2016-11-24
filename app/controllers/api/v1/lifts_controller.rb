class Api::V1::LiftsController < Api::V1::BaseController
  def index
    respond_with Lift.all
  end
end