function App() {
    return (
        <div>
        <Tweet
          name="J D"
          username="JDOERR13"
          date={new Date().toDateString()}
          message="I don't want to use deconstruction"
        />
        <Tweet
          name="Patrick Gabriel"
          username="PG"
          date={new Date().toDateString()}
          message="#Ilovedinosaurs"
        />
        <Tweet
          name="Anna Doerr"
          username="ADD"
          date={new Date().toDateString()}
          message="I don't use Twitter!"
        />
      </div>
    );
  }