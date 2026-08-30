import Button from "../src/Components/ui/Button";
import Card from "../src/Components/ui/card";
import Table from "../src/Components/ui/table";

function App() {
  const users = [
    {
      Name: "Amira",
      Age: 20,
      City: "Qena",
    },
    {
      Name: "Sara",
      Age: 21,
      City: "Cairo",
    },
    {
      Name: "Mona",
      Age: 22,
      City: "Alex",
    },
  ];

  return (
    <div>
      <h1>Reusable Components</h1>

      {/* Buttons */}
      <Button
        text="Save"
        variant="primary"
        onClick={() => alert("Saved")}
      />

      <Button
        text="Delete"
        variant="danger"
        onClick={() => alert("Deleted")}
      />

      <hr />

      {/* Cards */}
      <Card
        title="Laptop"
        description="Dell Core i7"
        image="https://www.dell.com/wp-uploads/2025/06/2602g0011-gl-cs-co-site-banner-da14250t-da16250t-1024x768-1280x1280-1.jpeg">
        
       <Button
          text="Buy Now"
          variant="secondary"
          onClick={() => alert("Added")}
        />

     </Card >

      <Card
        title="Phone"
        description="iPhone 15"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRya4uQIPjQbvXDGS3HzjxXCWTQeINAdDMlow4W6OkHSw&s=10"
      >
        <Button
          text="Buy Now"
          variant="secondary"
          onClick={() => alert("Added")}
        />
      </Card>

      <hr />

      {/* Table */}
      <Table
        columns={["Name", "Age", "City"]}
        data={users}
        striped
      />
    </div>
  );
}

export default App;