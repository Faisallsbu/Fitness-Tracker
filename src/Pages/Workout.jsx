import { useState } from "react";
import supabase from "../../supabase-client";

const Workout = () => {
  const [showForm, setShowForm] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    category: "Running",
    duration: "",
    calories_burned: "",
    distance_km: "",
    weight_lifted: "",
    notes: "",
  });

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("workouts") // Table name
      .insert([
        {
          user_id: "your-user-id", // Replace with the actual user ID from authentication
          category: newWorkout.category,
          duration: newWorkout.duration,
          calories_burned: newWorkout.calories_burned,
          distance_km: newWorkout.distance_km || null, // Set null for non-relevant values
          weight_lifted: newWorkout.weight_lifted || null,
          notes: newWorkout.notes,
          date: new Date().toISOString().split("T")[0], // Today's date
        },
      ]);

    if (error) {
      console.error("Error adding workout:", error);
      alert("Failed to add workout");
    } else {
      console.log("Workout added successfully:", data);
      setShowForm(false);
      setNewWorkout({
        category: "Running",
        duration: "",
        calories_burned: "",
        distance_km: "",
        weight_lifted: "",
        notes: "",
      });
    }
  };

  const workouts = [
    {
      id: 1,
      category: "Running",
      duration: 30,
      calories_burned: 89,
      distance_km: 14,
    },
    {
      id: 2,
      category: "Running",
      duration: 10,
      calories_burned: 50,
      distance_km: 5,
    },
    {
      id: 3,
      category: "Running",
      duration: 30,
      calories_burned: 105,
      distance_km: 9,
    },
    {
      id: 4,
      category: "Cycling",
      duration: 30,
      calories_burned: 90,
      distance_km: 5,
    },
    {
      id: 5,
      category: "Cycling",
      duration: 20,
      calories_burned: 120,
      distance_km: 15,
    },
    {
      id: 6,
      category: "Cycling",
      duration: 30,
      calories_burned: 200,
      distance_km: 18,
    },
    {
      id: 7,
      category: "Weight Lifting",
      duration: 30,
      calories_burned: 205,
      weight_lifted: 100,
    },
    {
      id: 8,
      category: "Weight Lifting",
      duration: 40,
      calories_burned: 220,
      weight_lifted: 50,
    },
    {
      id: 9,
      category: "Weight Lifting",
      duration: 30,
      calories_burned: 300,
      weight_lifted: 56,
    },
  ];
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Workouts</h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          onClick={() => setShowForm(true)}
        >
          + Add Workout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["Running", "Cycling", "Weight Lifting"].map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            {workouts
              .filter((workout) => workout.category === category)
              .map((workout) => (
                <div
                  key={workout.id}
                  className="bg-white shadow-md my-3 p-4 rounded-xl border border-gray-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold flex items-center gap-2">
                        <span className="text-purple-500">🏋️</span>
                        {workout.category}
                      </p>
                      <p className="text-gray-700">
                        Duration: {workout.duration} mins
                      </p>
                      <p className="text-gray-500">
                        Calories Burned: {workout.calories_burned} kcal
                      </p>
                      {workout.distance_km && (
                        <p className="text-gray-500">
                          Distance: {workout.distance_km} km
                        </p>
                      )}
                      {workout.weight_lifted && (
                        <p className="text-gray-500">
                          Weight Lifted: {workout.weight_lifted} kg
                        </p>
                      )}
                    </div>
                    <button
                      className="text-gray-500 hover:text-red-500"
                    >
                      &#x1F5D1;
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      
      {/* Workout Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Add Workout</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="block">
                <span className="text-gray-700">Category:</span>
                <select
                  name="category"
                  value={newWorkout.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                >
                  <option>Running</option>
                  <option>Cycling</option>
                  <option>Weight Lifting</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700">Duration (mins):</span>
                <input
                  type="number"
                  name="duration"
                  value={newWorkout.duration}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Calories Burned:</span>
                <input
                  type="number"
                  name="calories_burned"
                  value={newWorkout.calories_burned}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </label>

              {newWorkout.category !== "Weight Lifting" && (
                <label className="block">
                  <span className="text-gray-700">Distance (km):</span>
                  <input
                    type="number"
                    name="distance_km"
                    value={newWorkout.distance_km}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </label>
              )}

              {newWorkout.category === "Weight Lifting" && (
                <label className="block">
                  <span className="text-gray-700">Weight Lifted (kg):</span>
                  <input
                    type="number"
                    name="weight_lifted"
                    value={newWorkout.weight_lifted}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </label>
              )}

              <label className="block">
                <span className="text-gray-700">Notes:</span>
                <textarea
                  name="notes"
                  value={newWorkout.notes}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </label>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Add Workout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;
