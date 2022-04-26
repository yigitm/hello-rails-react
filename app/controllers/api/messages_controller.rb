
  class Api::MessagesController < ApplicationController
    def index
      render json: { :messages => [
        {
          :name => 'some-stuff'
        }
      ] }.to_json
    end
  end
