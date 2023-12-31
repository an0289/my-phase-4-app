class ItemsController < ApplicationController

    def index 
        render json: Item.all
    end 

    def show 
        item = find_item 
        render json: item
        # , serializer: ItemWithReviewsSerializer 
    end 

    private 

    def find_item
        Item.find(params[:id])
    end

end
