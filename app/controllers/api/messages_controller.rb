
  class Api::MessagesController < ApplicationController
    def index
      @message = Message.order('RANDOM()').first
      if @message
        render json: { success: true, message: 'Loaded greeting message', data: { greeting: @message } }, status: :ok
      else
        render json: { success: false, errors: 'Oops, Something went wrong!' }, status: :unprocessable_entity
      end
    end
  end
