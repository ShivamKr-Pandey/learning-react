# DFD

````mermaid
graph TD
    %% Define the component subgraphs first
    subgraph App [App Component]
        A[State: bill, tipAmount, friendTip]
        B[Functions: setBill, setTipAmount, setFriendTip, reset]
        C[Derived State: totalTip, totalBill]
        D[UI: <input> for bill]
        E[UI: <h2> Display Total]
    end

    subgraph Tip [Tip Component]
        F[Props: tipAmount, setTipAmount]
        G[UI: <select> Dropdown]
        H[Event: onChange]
    end

    subgraph Reset [ResetButton Component]
        I[Prop: onClick]
        J[UI: <button>]
        K[Event: onClick]
    end

    %% Define the connections between nodes
    A -- "value={bill}" --> D
    A -- "tipAmount={tipAmount}" --> F
    B -- "setTipAmount" --> F
    B -- "onClick={reset}" --> I
    A --> C
    C -- "Renders totalBill & totalTip" --> E
    D -- "onChange triggers setBill" --> B
    G -- "User selection" --> H
    H -- "triggers setTipAmount(e.target.value)" --> B
    J -- "User click" --> K
    K -- "triggers reset()" --> B

    %% --- STYLING SECTION ---
    style App fill:#e0f7fa,stroke:#00796b,stroke-width:4px,color:#004d40
    style Tip fill:#fff9c4,stroke:#fbc02d,stroke-width:4px,color:#795548
    style Reset fill:#ffcdd2,stroke:#c62828,stroke-width:4px,color:#b71c1c

    %% The 0th link (A --> D)
    linkStyle 0 stroke:#00796b,stroke-width:2px
    %% The 3rd link (B --> I)
    linkStyle 3 stroke:#c62828,stroke-width:2px,stroke-dasharray: 5 5
    %% The 8th link (H --> B)
    linkStyle 8 stroke:#fbc02d,stroke-width:4px
    ```
````
