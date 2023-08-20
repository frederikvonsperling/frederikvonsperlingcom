import { css } from "styled-system/css";

type Props = {
  children: React.ReactNode;
};

export const MaintenanceMode = ({ children }: Props) => {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    return (
      <div
        className={css({
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <p className={css({ color: "white", textAlign: "center" })}>
          Nothing to see here - move along
          <br />
          {/* <a
            href="mailto:hello@frederikvonsperling.com"
            className={css({ color: "blue.300" })}
          >
            hello@frederikvonsperling.com
          </a> */}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
