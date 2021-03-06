require 'sinatra'
require 'sinatra/reloader'

get '/' do
	erb :calc
end

get '/calc' do
	# calculation happens here
	@x = params[:x].to_f
	@y = params[:y].to_f

	@result = case params[:operation]
	when '+' then @x + @y
	when '-' then @x - @y
	when '/' then @x / @y
	when '*' then @x * @y
	end

	erb :calc
end

get '/about' do
	erb :about
end

get '/help' do
	erb :help
end

get '/advertise' do
	erb :advertise
end