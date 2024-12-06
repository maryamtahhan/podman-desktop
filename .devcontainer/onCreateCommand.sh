#!/bin/bash
#
# Copyright (C) 2022 Red Hat, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0

# This script is run inside the container after the repo has been cloned.
# Enable Corepack and ensure pnpm is available
export COREPACK_ENABLE_STRICT=0
if ! command -v pnpm &> /dev/null; then
    echo "pnpm is not installed. Enabling Corepack and ensuring pnpm is available..."
    corepack enable pnpm
    corepack prepare pnpm@latest --activate
fi

# Build podman-desktop
echo "Installing dependencies with pnpm..."
pnpm install
pnpm postinstall

echo "Building the project..."
pnpm compile

echo "Build completed successfully."