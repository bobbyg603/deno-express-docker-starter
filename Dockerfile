# ------------------------------------------------------------------------------
# Debug image
# ------------------------------------------------------------------------------

FROM denoland/deno:debian-1.34.1 as debug

# 1. Source code will be copied to here.
WORKDIR /app

# 2. Run from this user.
USER deno

# 3. To improve build time, copy deps.ts, and cache the app dependencies.
COPY --chown=root:root ./deps.ts ./deps.ts
RUN deno cache --unstable ./deps.ts

# 4. Copy the app and cache it. Also cache all *.test.ts files if such are found.
COPY --chown=root:root . .
RUN deno cache --unstable main.ts && \
	find . -name '*.test.ts' | xargs --no-run-if-empty deno cache --unstable

CMD ["task", "start:debug"]

# app service port = 5090
# debugger port = 48050
EXPOSE 5090 48050


# ------------------------------------------------------------------------------
# Production image
# ------------------------------------------------------------------------------

FROM denoland/deno:distroless-1.34.1

WORKDIR /app

COPY --from=debug --chown=1993 /deno-dir /deno-dir
COPY --from=debug --chown=root:root /app .

USER 1993
CMD ["task", "start"]

# app service port = 5090
EXPOSE 5090