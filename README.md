# Vodomat

Vodomat is a comprehensive system for managing water vending machines. This repository contains the "Driver" module, a Next.js application designed for drivers to monitor the status of water vending machines on their routes.

## Features

-   **Driver Authentication:** Drivers can log in using their credentials.
-   **Machine Status Monitoring:** View a list of water vending machines with real-time status updates.
-   **Detailed Information:** For each machine, drivers can see:
    -   Address
    -   Remaining water level
    -   Total volume
    -   Last notification time
-   **Alerts:** The application highlights machines with low water levels or those that are inactive.

## Technologies Used

-   **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **Backend:** [Next.js (API Routes)](https://nextjs.org/docs/api-routes/introduction), [Node.js](https://nodejs.org/)
-   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
-   **Database:** [MySQL](https://www.mysql.com/)
-   **Styling:** [Heroicons](https://heroicons.com/), [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Deployment:** [Docker](https://www.docker.com/)

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v22 or later)
-   [pnpm](https://pnpm.io/)
-   [Docker](https://www.docker.com/) (for running the application in a container)

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. You can use `.env.example` as a template.

```
# Database connection
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

# NextAuth.js
AUTH_SECRET=
AUTH_URL=
```

### Installation and Running the Application

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

### Building the Application

To create a production build, run:

```bash
pnpm build
```

### Running with Docker

To build and run the application with Docker, use the following commands:

```bash
# Build the Docker image
docker-compose build

# Start the application
docker-compose up
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Future Modules

The Vodomat project will be expanded to include modules for administrators and clients.