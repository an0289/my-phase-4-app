class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user
  has_one :item
  has_one :user
end
