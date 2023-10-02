# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# Method Name: letter_oe
# Input: Array and strings
# Output: Array of strings
# Process: Create a method. The method takes in a parameter of an array and a string. Use .select to iterate through an array and also creates a new array. The .select will check the values of the array and check to see if they include the string variable we are given. We then call on the method along with the variables to test it out.

def letter_oe (array, string)
    array.select do |value|  #.select iterates through the array and checks each value in the array.
        value.include?(string) # Then we check to see if the value includes the given string (o or t)
    end
end

p letter_oe(beverages_array,filter_letter_o)
p letter_oe(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { 
    northwest: ['Washington', 'Oregon', 'Idaho'], 
    southwest: ['California', 'Arizona', 'Nevada'], 
    notheast: ['Maine', 'New Hampshire', 'Rhode Island'] 
}
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# Method Name: hash_array
# Input: A hash
# Output: One Array 
# Process: Create a method. Use .values to just get the values from the key: value in the hash. Then use .flatten to get rid of nested arrays and just make it one whole array. Use .sort to alphabetize the entire array in alphabetical order.

def hash_array (hash)
    p hash.values.flatten.sort # .value lets us only get the values from the key: value. .flatten gets rid of nested arrays and makes it into one whole array. .sort alphabetizes each string.
end

hash_array(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# Class name: Bike
# Input: Our initialized information. String and numbers
# Output: A string (string interpolation)
# Process: Create a class and initialize the information inside of the class. Wheels and current_speed have default integers while model does not. Create a method called bike_info that returns the string interpolation when called upon.

class Bike
    def initialize(model) #Initialize the model, wheels, and current_speed. Wheels and current_speed already have default values. 
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info #String interpolation of each item we intizialized
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster (faster) #Determines the increase of pedaling 
        @current_speed += faster
    end
    def slow_down (brake) #Determines the decrease speed when you're braking
        @current_speed -= brake
        if @current_speed.negative?() == true #Checks to see if the minus equals a negative. If it does then current_speed turns to 0 because a bike speed should not be negative
            @current_speed = 0
        elsif @current_speed.negative?() == false #Checks if there is no negative. If there isn't it returns the subtraction of the speed and how much we were braking.
            @current_speed
        end
    end
end

p trek = Bike.new('Trek') #Entered only the model because that is the only thing the parameter is taking in.
p trek.bike_info #Prints the string interpolation including the model name: Trek

p trek.pedal_faster(10) 
p trek.pedal_faster(18)
p trek.slow_down(5)
p trek.slow_down(25)

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# Method: pedal_faster and brake
# Input: A number 
# Output: A number
# Process: Create a method for pedal_faster. Add a parameter called faster to indicate the number we are adding to the current speed. Inside the method add the current_speed to the parameter to get the increasing value. Then create another method which indicates the braking called slow_down. slow_down takes in a parameter which will indicate the number we need to subtract in order to see the current_speed decrease. Then use a conditional statement to detrmine if the subtraction creates a negative number. If it is negative then make the current_speed a zero because a bike never goes to negative speeds. If there is no negative numbers then it will just return the number as is when subtracted. 

# def pedal_faster (faster)
#     @current_speed += faster
# end
# def slow_down (brake)
#     @current_speed -= brake
#     if @current_speed.negative?() == true
#         @current_speed = 0
#     elsif @current_speed.negative?() == false
#         @current_speed
#     end
# end

# p trek.pedal_faster(10)
# p trek.pedal_faster(18)
# p trek.slow_down(5)
# p trek.slow_down(25)